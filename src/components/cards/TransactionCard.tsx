import { Card, CardHeader,CardTitle,CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowUp, ArrowDown, MoreVertical } from 'lucide-react';
import type {  TransactionCardProps } from "@/types/card.types";


const TransactionCard = ({ transactions }:TransactionCardProps) => {
  return (
    <Card className="w-full max-h-120 flex flex-col py-5 shadow-soft rounded-md">
      <CardHeader className="flex flex-row items-center justify-between px-5">
        <CardTitle className="text-xl font-semibold text-foreground">Transactions</CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="h-5 w-5 text-gray-400" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-5 overflow-y-auto px-5">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* <TransactionIcon type={transaction.type} bgColor={transaction.bgColor} /> */
              }
              <img src={transaction?.icon} />
              <div>
                <p className="font-medium text-foreground text-sm ">{transaction.type}</p>
                <p className=" text-gray-500 mt-0.5 text-xs">{transaction.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground text-sm">
                {transaction.isPositive ? '+' : '-'}${transaction.amount.toLocaleString()}
              </span>
              {transaction.isPositive ? (
                <ArrowUp className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-500" />
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TransactionCard