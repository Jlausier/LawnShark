import Skeleton from "react-loading-skeleton";

export default function BidCardSkeleton() {

    return (
        <div className="card-body bg-white border rounded p-2">
        <div className="row mt-2 mb-4">
          <div className="col-6">
            <Skeleton width={260} height={40} />
            <Skeleton width={100} height={20} />

          </div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <Skeleton width={150} height={40} className={"mx-2"}/>
            <Skeleton width={170} height={50} className={"mx-2"} />
            <Skeleton width={40} height={40} className={"mx-2"} />
          </div>
        </div>
        <div className="row pb-3">
          <div className="mb-2">
            <Skeleton width={600} height={140} inline={true} className={"me-2"} />
          </div>
        </div>
      </div>
    )
}