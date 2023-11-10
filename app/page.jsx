import React, { Suspense } from "react";
import Form from "./addTodoForm";
import Todos from "./todos";

const Page = async () => {
  return (
    <div className="container">
      <Form />

       <Todos />
    </div>
  );
};

export default Page;
