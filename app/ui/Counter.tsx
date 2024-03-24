import clsx from "clsx";

interface CounterProps {
  value: number;
  onChange: (a: number) => void;
  minValue?: number;
  maxValue?: number;
  className?: string;
}

const Counter = ({
  value,
  minValue = 0,
  maxValue = Infinity,
  onChange,
  className,
}: CounterProps) => {
  const onDescrease = () => {
    if (value > 0 && value > minValue) {
      onChange(value - 1);
    }
  };

  const onIncrease = () => {
    if (value < maxValue) {
      onChange(value + 1);
    }
  };

  return (
    <div
      className={clsx(
        "flex justify-between items-center w-full text-lg",
        className
      )}
    >
      <button type="button" onClick={onDescrease} className="text-2xl">
        -
      </button>
      {value}
      <button type="button" onClick={onIncrease} className="text-2xl">
        +
      </button>
    </div>
  );
};

export default Counter;
