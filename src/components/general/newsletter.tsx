"use client";
import { TextField } from "@radix-ui/themes";
import Button from "./button";

const NewsLetter = () => {
  return (
    <div className="flex flex-col gap-5 p-20 bg-primaryTint rounded">
      <div className={"flex flex-col gap-5"}>
        <h1 className={"text-2xl font-semibold"}>Sign Up for Our Newsletter</h1>
        <p>Subscribe to receive our latest company updates</p>
      </div>

      <div className={"flex flex-row gap-3 w-full items-center"}>
        <TextField.Root
          placeholder="Enter your email"
          className={"bg-transparent p-[14px] w-full h-auto"}
        >
          <TextField.Slot></TextField.Slot>
        </TextField.Root>

        <Button
          style={"hover:text-primary hover:border-primary hover:bg-primaryTint"}
          color={"text-white bg-primary"}
          onClick={() => console.log("subscribed")}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default NewsLetter;
