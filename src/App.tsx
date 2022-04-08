import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "ぴーつん",
  email: "123@example.com",
  address: "地球"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
