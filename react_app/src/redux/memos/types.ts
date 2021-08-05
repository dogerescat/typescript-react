export interface MemoState {
  uid: string;
  title: string;
  content: string;
  userId: string;
  isFavorite: boolean;
  imageId: string;
}
export interface MemoList {
  memoList: MemoState[]
}
export interface MemoAction {
  type: string;
  payload: {
    memoLists: MemoState[]
  };
}

