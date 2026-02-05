import OperationBanner from "./components/OperationsBanner24";
import ProductCards from "./components/ProductCards";


const Operations24Page = () => {
    return (
        <section
            style={{
                // background:'url(D:\PROJECTS\PROJECTS\FRONTEND\spiralink-frontend\public\assets\bg\operations\operation-bg.png)',
                backgroundImage: 'url(/assets/bg/operations/operation-bg.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: 'screen',
                overflow: 'hidden'
            }}
        >
            <OperationBanner />
            <ProductCards />
        </section>
    )
}

export default Operations24Page;