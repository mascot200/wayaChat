/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  WayaChat: undefined;
  ChatRoom: undefined;
  Contacts: undefined;
  
};

export type MainTabParamList = {
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
  Camera: undefined;

};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: String,
  name: String,
  imageUri: String,
  status: String
}

export type Message = {
  id: String,
  content: String,
  createdAt:String,
  user: User
}

export type Status = {
  id: String,
  content: String,
  createdAt:String,
  user: User
}

export type ChatRoom = {
  id: String,
  users: User[];
  lastMessage: Message
}
