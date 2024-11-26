import Image from "next/image";
import bigStar from "@/public/bigStar.svg"
import smallStar from "@/public/smallstar.svg"

const ForeGround = () => {
  return (
    <div className="w-full h-screen absolute overflow-hidden">
      <div className="w-full h-full absolute">
        <div className="flex flex-col-top-40 left-32 absolute z-20">
          <div className="flex h-96 w-96 rounded-full bg-gradient-to-b from-[#EDD955] to-[#EDD955]/10 opacity-10 blur-3xl">
          </div>
          <div className="flex top-30 left-32 absolute">
            <div className="flex w-44 h-60 bg-gradient-to-b from-[#E4B40D] to-[#EDD955] opacity-10 absolute blur-3xl">
            </div>
          </div>
          <div className="flex absolute top-[70%] left-[60%]">
            <Image src={bigStar} height={500} width={500} alt="star" style={{ width: "60px", height: "60px" }} />
          </div>
        </div>
          <div className="flex top-40 left-16 absolute z-20">
            <div className="flex w-[775px] h-[315px] backdrop:blur-lg bg-[#EDD955] opacity-10 absolute blur-3xl rounded-[50%]">
            </div>
          </div>
        <div className="flex flex-col right-96 top-48 absolute z-20">
          <div className="flex top-[80%] right-[80%]">
            <Image src={smallStar} height={500} width={500} alt="star" style={{ width: "40px", height: "40px" }} />
          </div>
        </div>
        <div className="flex flex-col right-[35%] top-80 absolute z-30">
          <div className="flex">
            <div className="flex w-64 h-64 bg-gradient-to-br from-[#FFF6D7] from-10% to-[#E4B40D] to-60% absolute rounded-full">
            </div>
          </div>
        </div>
        <div className="flex right-[40%] top-[55%] absolute z-30">
          <div className="flex w-[775px] h-[315px] backdrop:blur-lg bg-[#EDD955] opacity-15 absolute blur-3xl rounded-[50%]">
          </div>
        </div>
        <div className="flex flex-col right-96 top-[75%] absolute z-20">
          <Image src={bigStar} height={500} width={500} alt="star" style={{ width: "60px", height: "60px" }} />
        </div>
        <div className="flex flex-col overflow-hidden rotate-12 -left-64 -top-8 absolute z-10">
          <div className="flex w-[2300px] h-[920px] border border-[#484848]/80 rounded-[50%] justify-center items-center">
            <div className="flex w-[1800px] h-[720px] border border-[#484848]/80 rounded-[50%] justify-center items-center">
              <div className="flex w-[1300px] h-[520px] border border-[#484848]/80 rounded-[50%]">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForeGround;