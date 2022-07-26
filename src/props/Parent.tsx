import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("yay")}>
      kjdklk;
    </ChildAsFC>
  );
};

export default Parent;
