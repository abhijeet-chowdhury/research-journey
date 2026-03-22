import { ArrowDown } from "lucide-react";

interface BridgeCardProps {
  question: string;
}

const BridgeCard = ({ question }: BridgeCardProps) => {
  return (
    <div className="flex flex-col items-center gap-3 py-6 animate-in fade-in duration-700">
      <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
      <div className="glow-teal rounded-xl p-5 max-w-lg mx-auto glass-card border-primary/30 text-center space-y-2">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary">
          This Learning Led To…
        </span>
        <p className="text-sm text-foreground/90 leading-relaxed italic">
          "{question}"
        </p>
      </div>
      <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
    </div>
  );
};

export default BridgeCard;
