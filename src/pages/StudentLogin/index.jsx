import { Input, Button } from "antd";
import {UserOutlined, UnlockOutlined} from '@ant-design/icons'

export default function Login(){
  return(
    <div className="h-screen flex items-center justify-center">
      <div className="w-80 flex flex-col items-center">
        <h1 className="text-2xl">Login</h1>
        <div>
          <Input
          className="my-3"
          size="large"
          type="text"
          placeholder="Username"
          prefix={<UserOutlined />}/>
          <Input
          className="my-3"
          size="large"
          type="Password"
          placeholder="Password"
          prefix={<UnlockOutlined />}/>
        </div>
        <Button type="primary">Submit</Button>
      </div>
    </div>
  )
}