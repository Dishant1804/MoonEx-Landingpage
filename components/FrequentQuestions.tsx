import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


const FrequentQuestions = () => {
  return <div className="flex flex-col w-full items-center h-full">
    <div className="flex flex-col w-full max-w-7xl justify-center items-center h-full md:my-20 px-4">
      <div className="absolute rotate-90 z-20 h-[175px] w-[375px] md:h-[575px] md:w-[775px] top-[80%] -left-[20%] blur-3xl bg-[#EDD955] opacity-10 rounded-[50%]">
      </div>
      <div className="hidden lg:flex absolute z-20 h-[75px] w-[375px] md:h-[375px] md:w-[675px] top-[70%] -right-[15%] blur-3xl bg-[#EDD955] opacity-10 rounded-[50%]">
      </div>
      <div className="flex flex-col w-full max-w-4xl justify-center items-center py-8 rounded-xl bg-[#0e1c29]">
        <div className="text-yellow-500 font-neue-ultrabold text-3xl py-4">
          FAQs
        </div>
        <div className="w-full max-w-3xl px-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="md:text-lg">How do I get Referral Code?</AccordionTrigger>
              <AccordionContent className="text-[#B6B6B6]">
                Go to Profile section. Find Referral Option and copy the Code.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="md:text-lg">Do I get rewarded in tokens or ETH when I refer buyers?</AccordionTrigger>
              <AccordionContent className="text-[#B6B6B6]">
                You receive your rewards in ETH instantly once someone you refer makes a transaction!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="md:text-lg">How do I get Referral Code?</AccordionTrigger>
              <AccordionContent className="text-[#B6B6B6]">
                Go to Profile section. Find Referral Option and copy the Code.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
}

export default FrequentQuestions