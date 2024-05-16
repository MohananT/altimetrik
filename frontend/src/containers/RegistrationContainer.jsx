import { Tabs, TabList, Tab, TabPanels, TabPanel, Button, Select } from "@chakra-ui/react"
import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useState } from "react"
import axios from "axios"

export default function Registration() {
    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [aadhar, setAadhar] = useState('')
    const [regDate, setRegDate] = useState('')
    const [mobNum, setMobNum] = useState('')

    const [planName, setPlanName] = useState('')
    const [planCost, setCost] = useState('')
    const [validity, setValidity] = useState('')
    const [status, setStatus] = useState('')

    const handleClick = async () => {
        const formData = { name, dob, email, aadhar, regDate, mobNum, planName, planCost, validity, status }
        try {
            const response = await axios.post('http://localhost:5000/customer', formData);
            console.log('Response:', response.data);
            // Handle success or do something with the response
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    }
    return (
        <div>
            <Tabs isFitted variant='enclosed' colorScheme="teal">
                <TabList mb='1em'>
                    <Tab>Register Customer</Tab>
                    <Tab>New Plan</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <FormControl marginBottom={3} isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input placeholder='First name' value={name} onChange={(e) => setName(e.target.value)} />
                        </FormControl>
                        <FormControl marginBottom={3} >
                            <FormLabel>DoB</FormLabel>
                            <Input placeholder='Date of Birth' value={dob} onChange={(e) => setDob(e.target.value)} />
                        </FormControl>
                        <FormControl isRequired marginBottom={3}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Email is mandatory' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FormControl>
                        <FormControl isRequired marginBottom={3}>
                            <FormLabel>Aadhar</FormLabel>
                            <Input placeholder='Aadhar number' value={aadhar} onChange={(e) => setAadhar(e.target.value)} />
                        </FormControl>
                        <FormControl marginBottom={3}>
                            <FormLabel>Reg Date</FormLabel>
                            <Input placeholder='First name' value={regDate} onChange={(e) => setRegDate(e.target.value)} />
                        </FormControl>
                        <FormControl marginBottom={3}>
                            <FormLabel>Mob Num</FormLabel>
                            <Input placeholder='Mobile Number' type="tel" value={mobNum} onChange={(e) => setMobNum(e.target.value)} />
                        </FormControl>
                        <Button colorScheme="teal" onClick={handleClick}>Submit</Button>
                    </TabPanel>
                    <TabPanel>
                        <FormControl marginBottom={3}>
                            <FormLabel>Plan Name</FormLabel>
                            <Select placeholder='Plan Name' value={planName} onChange={(e) => setPlanName(e.target.value)}>
                                <option value='Platinum365'>Platinum365</option>
                                <option value='Gold180'>Gold180</option>
                                <option value='Silver90'>Silver90</option>
                            </Select>
                        </FormControl>
                        <FormControl marginBottom={3}>
                            <FormLabel>Plan Cost</FormLabel>
                            <Select placeholder='planCost' value={planCost} onChange={(e) => setCost(e.target.value)}>
                                <option value='499'>499</option>
                                <option value='299'>299</option>
                                <option value='199'>199</option>
                            </Select>
                        </FormControl>
                        <FormControl marginBottom={3}>
                            <FormLabel>Validity</FormLabel>
                            <Select placeholder='Validity' value={validity} onChange={(e) => setValidity(e.target.value)}>
                                <option value='365'>365</option>
                                <option value='180'>180</option>
                                <option value='90'>90</option>
                            </Select>
                        </FormControl>
                        <FormControl marginBottom={3}>
                            <FormLabel>Plan Status</FormLabel>
                            <Select placeholder='Plan Status' value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value='Active'>Active</option>
                                <option value='InActive'>InActive</option>
                            </Select>
                        </FormControl>
                        <Button colorScheme="teal" onClick={handleClick}>Submit</Button>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}