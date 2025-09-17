import { useCommentList } from "./hook";
import styles from "./styles.module.css";

import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton } from "antd";
import CommentItem from "../comment-list-item";

export default function CommentList() {
	const { data, fetchMore, isHasMore, setIsHasMore } = useCommentList();

	const onNext = async () => {
		if (data === undefined) return;

		try {
			const response = await fetchMore({
				variables: {
					page: Math.ceil((data?.fetchBoardComments.length ?? 10) / 10) + 1,
				},
				updateQuery: (prev, { fetchMoreResult }) => {
					if (fetchMoreResult.fetchBoardComments.length === 0) {
						setIsHasMore(false);
						// return prev;
						return {
							fetchBoardComments: [...prev.fetchBoardComments],
						};
					}
					return {
						fetchBoardComments: [
							...prev.fetchBoardComments,
							...fetchMoreResult.fetchBoardComments,
						],
					};
				},
			});
			console.log("response", response);
		} catch (error) {
			// fetchMore 가 실패할 수도 있으니까? 오류 처리가 필요하겠죠..?
			console.error(error);
		}
	};

	return (
		<div className={styles.commentListBody}>
			<div className={styles.commentListContainer}>
				<InfiniteScroll
					dataLength={data?.fetchBoardComments.length ?? 0}
					next={onNext}
					hasMore={isHasMore}
					loader={<Skeleton />}
				>
					{data?.fetchBoardComments.map((comment, index) => (
						<CommentItem
							key={comment._id}
							comment={comment}
							index={index}
							length={data?.fetchBoardComments.length ?? 0}
						/>
					))}
				</InfiniteScroll>
			</div>
		</div>
	);
}
