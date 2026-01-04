import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { MoreVertical } from 'lucide-react';
import type { UpgradePlanCardProps } from "@/types/card.types";
import { Input } from "../ui/input";
import mscard from "@/assets/msdcrad.svg"

const UpgradePlanCard = ({ plan }: UpgradePlanCardProps) => {
  const isComingSoon = true; // toggle this later via props or feature flag

  return (
    <Card className="relative w-full shadow-soft border-gray-100 max-h-120 flex flex-col py-5 rounded-md">
      {/* Overlay */}
      {isComingSoon && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center
                        bg-white/60 backdrop-blur-sm">
          <p className="text-lg font-semibold text-gray-700">
            Coming Soon
          </p>
          <p className="text-sm text-gray-500 mt-1">
            This feature is under development
          </p>
        </div>
      )}
      <CardHeader className="flex flex-row items-center justify-between px-5">
        <CardTitle className="text-xl font-semibold text-gray-800">Upgrade Your Plan</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="h-5 w-5 text-gray-500" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-6 px-5 overflow-y-auto">
        <p className="text-[13px] text-gray-500 leading-relaxed">{plan.description}</p>

        <div className="bg-to-br from-purple-50 to-purple-100 rounded-2xl p-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/60 backdrop-blur rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-800 text-[15px]">{plan.name}</p>
              <p className="text-sm text-purple-600 mt-0.5">{plan.subtitle}</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[13px] text-gray-600">$</span>
            <span className="text-2xl font-bold text-gray-800">{plan.price.toLocaleString()}</span>
            <span className="text-[13px] text-gray-600">/Year</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800 text-[15px]">Payment details</h3>

          {plan.paymentMethods.map((method) => (
            <div key={method.id} className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className={`w-12 h-8 rounded-md flex items-center justify-center shadow-sm`}>
                  {/* <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                    <circle cx="9" cy="12" r="3.5"/>
                    <circle cx="15" cy="12" r="3.5" fillOpacity="0.7"/>
                  </svg> */}
                  <img src={mscard} />
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-[14px]">{method.type}</p>
                  <p className="text-[13px] text-gray-500">2566 xxxx xxxx {method.lastFour}</p>
                </div>
              </div>
              <Input
                placeholder="CVV"
                className="w-28 h-11 text-center bg-gray-50 border-gray-200 text-gray-500"
                maxLength={3}
              />
            </div>
          ))}

          <Button variant="link" className="text-purple-600 p-0 h-auto font-medium text-[14px] hover:no-underline">
            Add Payment Method
          </Button>
        </div>

        <Input
          placeholder="Email Address"
          className="w-full py-5.5 bg-gray-50 border-gray-200"
        />

        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-5.5 text-sm font-medium tracking-wide rounded-xl">
          CONTECT NOW
        </Button>
      </CardContent>
    </Card>
  );
};


export default UpgradePlanCard