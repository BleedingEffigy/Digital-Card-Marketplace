import dynamic from "next/dynamic";
import Link from 'next/link'

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/image-editor"),
  { ssr: false }
);


const CardSmith = () => <DynamicComponentWithNoSSR/>
export default CardSmith;

CardSmith.getLayout = function getLayout(page){
    return (
        <>
            <div className="flex">
            <Link href="/">
                <a className="mx-2 text-pink-500">
                  GiftNFT
                </a>
            </Link>
            <button className="mr-5">Front</button>
            <button className="mr-5">Inside-Left</button>
            <button className="">Inside-Right</button>
        </div>
            {page} 
        </>
    )
}