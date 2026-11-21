import React from 'react'
import { Link } from "react-router";
import {Button} from "@/Components/ui/Button"
const Home = () => {
  return (
    <>Home
       <Link to={"/contact"}>
        <Button>Contact</Button>
        </Link>
        <Link to={"/dashboard"}>
        <Button>Dashboard</Button>
        </Link>
    </>
  )
}

export default Home