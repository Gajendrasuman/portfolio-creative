import DotBox from "../ui/dot-box"

export default function RightSide(){
  return (
    <div className="w-1/4 xl:block hidden relative overflow-hidden">
          <DotBox v_count={6} h_count={6} xgap={12} ygap={12} rounded={false} className="absolute top-1/5 right-0 float-horizontal" />
          <div className="absolute bottom-32 right-0 h-48 w-2/3 -left-1/3 border border-text float-vertical"></div>
          <DotBox v_count={4} h_count={6} xgap={12} ygap={8} className="absolute bottom-3/10 left-0 float-vertical" />
        </div>
  )
}