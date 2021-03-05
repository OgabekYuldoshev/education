import Link from "next/link"
import { Button } from 'antd';

export default function Home(){
  return(
    <div className="flex items-center justify-center h-screen">
      <div className="p-4">
        <h1 className="text-center text-lg py-5">Who are you?</h1>
        <div class>
          <Link href="/login">
            <Button className="mx-5">Student</Button>
          </Link>
          <Link href="#">
            <Button className="mx-5">Teacher</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}