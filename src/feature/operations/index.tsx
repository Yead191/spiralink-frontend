import OperationBanner from "./components/OperationsBanner";
import ProductCards from "./components/ProductCards";


const OperationsPage = () => {
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

export default OperationsPage;