interface NumberProps {
  number: string;
  children: any;
}
export default function Number({ number, children }: NumberProps) {
  return (
    <div className="flex flex-row items-center justify-center" style={{ width: '600px' }}>
      <div className="mr-10 relative py-10">
        <h3
          className="font-drukwide-bold text-9xl relative z-0 top-3"
          style={{ WebkitTextStroke: '2px white' }}
        >
          {number}
        </h3>
        <h3 className="font-drukwide-bold text-8xl text-white z-10 absolute top-7 left-0">
          {number}
        </h3>
      </div>
      <div>
        <p className="font-icomoon-regular text-md text-white">{children}</p>
      </div>
    </div>
  );
}
