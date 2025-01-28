import Brands from "../styles/brand.module.css"

export function Brand(){
    return(
        <div className={Brands.trustedbrand}>
            <h3>Trusted By Over 100+ Startup and freelance business</h3>
            <div className={Brands.brandname}>
                <span className={Brands.brand}>ORACLE</span>
                <span className={Brands.brand}>Samsung</span>
                <span className={Brands.brand}>MORPHES</span>
                <span className={Brands.brand}>SEGMENT</span>
                <span className={Brands.brand}>Oracle</span>

            </div>
        </div>
    )
}