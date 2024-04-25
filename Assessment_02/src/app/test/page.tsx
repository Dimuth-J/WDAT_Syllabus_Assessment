import { FunctionComponent } from "react";

const MacBookPro16: FunctionComponent = () => {
  return (
    <div className="w-full bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[909px] box-border gap-[0.2px] leading-[normal] tracking-[normal] text-center text-17xl text-white font-inter">
      <header className="self-stretch h-32 relative bg-lightseagreen" />
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[3.6px] max-w-full">
        <div className="flex-1 rounded-t-none rounded-br-31xl rounded-bl-none bg-darkslateblue flex flex-row items-start justify-center pt-[14.1px] pb-[18.3px] pr-5 pl-[21px] box-border min-w-[288px] max-w-full">
          <div className="h-[79.8px] w-[573.6px] relative rounded-t-none rounded-br-31xl rounded-bl-none bg-darkslateblue hidden max-w-full" />
          <div className="h-[47.4px] w-[207.6px] relative font-extrabold inline-block shrink-0 z-[1] mq450:text-3xl mq767:text-10xl">
            ADD Task
          </div>
        </div>
        <div className="flex-1 rounded-t-none rounded-b-31xl bg-darkslateblue flex flex-row items-start justify-center pt-[14.1px] px-5 pb-[18.3px] box-border min-w-[288px] max-w-full">
          <div className="h-[79.8px] w-[573.6px] relative rounded-t-none rounded-b-31xl bg-darkslateblue hidden max-w-full" />
          <div className="h-[47.4px] w-72 relative font-extrabold inline-block shrink-0 z-[1] mq450:text-3xl mq767:text-10xl">
            View All Task
          </div>
        </div>
        <div className="flex-1 rounded-t-none rounded-br-none rounded-bl-31xl bg-darkslateblue flex flex-row items-start justify-center pt-[14.1px] px-5 pb-[18.3px] box-border min-w-[288px] max-w-full">
          <div className="h-[79.8px] w-[573.6px] relative rounded-t-none rounded-br-none rounded-bl-31xl bg-darkslateblue hidden max-w-full" />
          <div className="h-[47.4px] w-[122.4px] relative font-extrabold inline-block shrink-0 z-[1] mq450:text-3xl mq767:text-10xl">
            Trash
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookPro16;
