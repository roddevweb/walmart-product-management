import Layout from "@/components/layout"
import BtnAddProduct from '../../components/BtnAddProduct'
import '../globals.css'
import { Box } from "@mui/material"



export default function ProductManagementPage() {

    return (

        <Box>
            <Layout title="Product Management" />
            <Box display={"flex"} justifyContent={"flex-end"} margin={3}>
                <BtnAddProduct />
            </Box>
        </Box>
    )
}