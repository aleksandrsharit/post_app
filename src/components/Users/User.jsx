import React from 'react';
import s from './User.module.css'
import { Card, Col, Descriptions, Row } from 'antd';


const User = (props) => {
    debugger;
    let u = props.user;
    return <Card className={s.card}>
        <h3>{u.name}</h3>
        <Row>
            <Col span={7}>
                <p>id: {u.id}</p>
                <p>Email: {u.email}</p>
                <p>Address: {`${u.address.street} ${u.address.suite}, ${u.address.city}`}</p></Col>
            <Col span={7}>
                <p>Phone: {u.phone}</p>
                <p>Website: {u.website}</p>
                <p>Company {`Name: ${u.company.name}, catchPhrase: ${u.company.catchPhrase}, bs: ${u.company.bs}`}</p>
            </Col>
            <Col span={10}></Col>
        </Row>
    </Card>

    // return <Descriptions title="User Info" bordered layout="vertical" labelBg={'#333'}>
    //     <Descriptions.Item label="id">{u.id}</Descriptions.Item>
    //     <Descriptions.Item label="Name">{u.name}</Descriptions.Item>
    //     <Descriptions.Item label="UserName">{u.userName}</Descriptions.Item>
    //     <Descriptions.Item label="Email">{u.email}</Descriptions.Item>
    //     <Descriptions.Item label="Address">{`${u.address.street} ${u.address.suite}, ${u.address.city}`}</Descriptions.Item>
    //     <Descriptions.Item label="Phone">{u.phone}</Descriptions.Item>
    //     <Descriptions.Item label="Website">{u.website}</Descriptions.Item>
    //     <Descriptions.Item label="Company">{`Name: ${u.company.name}, catchPhrase: ${u.company.catchPhrase}, bs: ${u.company.bs}`}</Descriptions.Item>
    // </Descriptions>
}

export default User;


