import React, { useEffect, useState } from 'react'
import { BoxBody, BoxFooter, BoxFooterText, BoxHeader, ClassScheduleTableWrapper, ContentWrapper } from '../../global_styles/styles'
import { TableTHHeader } from '../DiplomaTable'
import { Pagination, Paper } from '@mui/material'
import PageSelector from '../PageSelector'
import CustomizedInput from '../CustomizedInput'
import CustomizedInputSimple from '../CustomizedInputSimple'
import { InputsWrapper } from '../CourseManagement/styles'
import { BoxHeaderApp } from '../Applications/styles'
import AllSelect from '../AllSelect'
import { getSemester } from '../Applications/requests'
import { my_semesters, syllabus_sciences, teacher_mylessons, teacher_sciences } from '../../utils/API_urls'
import { getTeacherSciences } from './requests'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

export default function Patoks() {
    const [semesters, setSemesters] = useState([])
    const [semester, setSemester] = useState(0)
    const [sciencess, setsciencess] = useState([])
    const [sciences, setsciences] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [allCount, setAllCount] = useState(0)
    const [pageCount, setPageCount] = useState(1)
    const [page, setPage] = useState(1)
    const [mylessons, setmylessons] = useState([])
    

    const getSemesters = (response) => {
        const semester_firstly = response.data.map(element => {
            return {
                value: element.id,
                name: element.name
            }
        })
        setSemester(semester_firstly[0].value)
        setSemesters(semester_firstly)
    }



    const getSemestersEror = (error) => { console.log(error) }
    const getSciencesEror = (error) => { console.log(error) }
    const getMylessonsError = (error) => { console.log(error) }

    useEffect(() => {
        getSemester(my_semesters, getSemesters, getSemestersEror)
        
    }, [])


    const getSciences = (response) => {
        const sciences_firstly = response.data.map(element => {
            return {
                value: element.id,
                name: element.name
            }
        })
        setsciences(sciences_firstly[0].value)
        setsciencess(sciences_firstly)
    }

    useEffect(() => {
        getTeacherSciences(teacher_sciences, getSciences, getSciencesEror)
      }, [])

    const getMylessons = (response) => {
        setPageCount(response.data.page_count)
        setAllCount(response.data.count)
        setmylessons(response.data.results)
    }
    

    useEffect(() => {
        if (semester !== 0 && semester !== 0) {
        getTeacherSciences(`${teacher_mylessons}?semester=${semester}&page_size=${pageSize}&page=${page}&science_id=${sciences}`, getMylessons, getMylessonsError)
        }
      }, [page, pageSize, semester, sciences])


  return (
    <>
    <Paper
        elevation={0}
        sx={{
            width: '100%',
            padding: "20px",
            borderRadius: "10px"
        }}
    >

      <BoxHeaderApp>
                    <AllSelect
                        chageValueFunction={val => { setsciences(val) }}
                        selectOptions={sciencess}
                    />
                    <AllSelect
                        chageValueFunction={val => { setSemester(val); }}
                        selectOptions={semesters}
                    />
                </BoxHeaderApp>
        <BoxHeader>
            <PageSelector chageValueFunction={(val) => {
                        setPageSize(val)
            }} />
            <CustomizedInput callback_func={(val) => { console.log(val) }} />
        </BoxHeader>
         <BoxHeader>
                    <InputsWrapper>
                        <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="" />
                        <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="" />
                        <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="" />
                    </InputsWrapper>
                </BoxHeader>
        <BoxBody>
        <ClassScheduleTableWrapper>
            <table>
                <thead>
                    <tr>
                        <TableTHHeader
                            text={"ID"}
                            iconc={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9998 0.666667C15.9998 1.03533 15.7011 1.33333 15.3331 1.33333H6.66648C6.29848 1.33333 5.99981 1.03533 5.99981 0.666667C5.99981 0.298 6.29848 0 6.66648 0H15.3331C15.7011 0 15.9998 0.298 15.9998 0.666667ZM13.3331 3.33333H6.66648C6.29848 3.33333 5.99981 3.63133 5.99981 4C5.99981 4.36867 6.29848 4.66667 6.66648 4.66667H13.3331C13.7011 4.66667 13.9998 4.36867 13.9998 4C13.9998 3.63133 13.7011 3.33333 13.3331 3.33333ZM11.3331 6.66667H6.66648C6.29848 6.66667 5.99981 6.96467 5.99981 7.33333C5.99981 7.702 6.29848 8 6.66648 8H11.3331C11.7011 8 11.9998 7.702 11.9998 7.33333C11.9998 6.96467 11.7011 6.66667 11.3331 6.66667ZM9.33315 10H6.66648C6.29848 10 5.99981 10.298 5.99981 10.6667C5.99981 11.0353 6.29848 11.3333 6.66648 11.3333H9.33315C9.70115 11.3333 9.99981 11.0353 9.99981 10.6667C9.99981 10.298 9.70115 10 9.33315 10ZM5.13781 12.862L3.99981 14V0.666667C3.99981 0.298 3.70115 0 3.33315 0C2.96515 0 2.66648 0.298 2.66648 0.666667V14L1.52781 12.8613C1.26715 12.6007 0.845815 12.6007 0.585148 12.8613C0.324482 13.122 0.324482 13.5433 0.585148 13.804L2.38982 15.6087C2.64982 15.8687 2.99115 15.9987 3.33315 15.9987C3.67515 15.9987 4.01581 15.8687 4.27581 15.6087L6.08048 13.804C6.34115 13.5433 6.34115 13.122 6.08048 12.8613C5.81981 12.6007 5.39848 12.6013 5.13781 12.862Z" fill="#B8B8B8"/>
                            </svg>
                            }
                        />
                        <TableTHHeader
                            text={"Patok idenfikatori"}
                            iconc={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.33316 15.3334L4.33316 1.78741L4.34316 1.79674L5.8665 3.29274C5.92799 3.3582 6.00208 3.41056 6.08432 3.44667C6.16655 3.48279 6.25524 3.50191 6.34504 3.5029C6.43485 3.50389 6.52394 3.48672 6.60694 3.45242C6.68995 3.41813 6.76518 3.36741 6.8281 3.30332C6.89102 3.23923 6.94034 3.16309 6.9731 3.07946C7.00587 2.99584 7.02139 2.90645 7.01875 2.81668C7.01611 2.7269 6.99536 2.63858 6.95774 2.55703C6.92012 2.47547 6.86641 2.40236 6.79983 2.34208L5.28183 0.849411C5.17316 0.740744 5.0065 0.588744 4.83116 0.433411C4.51575 0.154465 4.10923 0.000488154 3.68816 0.000488136C3.2671 0.000488117 2.86057 0.154465 2.54516 0.433411C2.3705 0.588744 2.20383 0.740744 2.0985 0.845411L0.575831 2.34208C0.457959 2.46754 0.393189 2.63374 0.395083 2.80588C0.396976 2.97802 0.465385 3.14275 0.585988 3.2656C0.706591 3.38844 0.870039 3.45987 1.04211 3.46493C1.21419 3.46999 1.38155 3.40829 1.50916 3.29274L2.99983 1.82941L2.99983 15.3334C2.99983 15.5102 3.07007 15.6798 3.19509 15.8048C3.32012 15.9298 3.48969 16.0001 3.6665 16.0001C3.84331 16.0001 4.01288 15.9298 4.1379 15.8048C4.26293 15.6798 4.33316 15.5102 4.33316 15.3334Z" fill="#B8B8B8"/>
                            <path d="M9.66667 0.666667L9.66667 14.17L8.17801 12.7073C8.11651 12.6419 8.04242 12.5895 7.96019 12.5534C7.87795 12.5173 7.78927 12.4982 7.69946 12.4972C7.60965 12.4962 7.52057 12.5134 7.43756 12.5477C7.35455 12.582 7.27933 12.6327 7.21641 12.6968C7.15348 12.7608 7.10416 12.837 7.0714 12.9206C7.03864 13.0042 7.02311 13.0936 7.02575 13.1834C7.02839 13.2732 7.04914 13.3615 7.08676 13.4431C7.12438 13.5246 7.17809 13.5977 7.24467 13.658L8.76401 15.1507C8.87267 15.2593 9.03934 15.4113 9.21401 15.5667C9.52942 15.8456 9.93594 15.9996 10.357 15.9996C10.7781 15.9996 11.1846 15.8456 11.5 15.5667C11.6753 15.4113 11.842 15.2593 11.9467 15.1547L13.4667 13.658C13.5845 13.5325 13.6493 13.3663 13.6474 13.1942C13.6455 13.0221 13.5771 12.8573 13.4565 12.7345C13.3359 12.6116 13.1725 12.5402 13.0004 12.5352C12.8283 12.5301 12.661 12.5918 12.5333 12.7073L11.0067 14.208L11 14.2133L11 0.666667C11 0.489856 10.9298 0.320286 10.8047 0.195262C10.6797 0.0702378 10.5102 -1.37136e-07 10.3333 -1.44865e-07C10.1565 -1.52593e-07 9.98696 0.0702378 9.86194 0.195262C9.73691 0.320286 9.66667 0.489856 9.66667 0.666667Z" fill="#B8B8B8"/>
                            </svg>
                            }
                        />
                        <TableTHHeader
                            text={"Talabalar soni"}
                            iconc={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.33316 15.3334L4.33316 1.78741L4.34316 1.79674L5.8665 3.29274C5.92799 3.3582 6.00208 3.41056 6.08432 3.44667C6.16655 3.48279 6.25524 3.50191 6.34504 3.5029C6.43485 3.50389 6.52394 3.48672 6.60694 3.45242C6.68995 3.41813 6.76518 3.36741 6.8281 3.30332C6.89102 3.23923 6.94034 3.16309 6.9731 3.07946C7.00587 2.99584 7.02139 2.90645 7.01875 2.81668C7.01611 2.7269 6.99536 2.63858 6.95774 2.55703C6.92012 2.47547 6.86641 2.40236 6.79983 2.34208L5.28183 0.849411C5.17316 0.740744 5.0065 0.588744 4.83116 0.433411C4.51575 0.154465 4.10923 0.000488154 3.68816 0.000488136C3.2671 0.000488117 2.86057 0.154465 2.54516 0.433411C2.3705 0.588744 2.20383 0.740744 2.0985 0.845411L0.575831 2.34208C0.457959 2.46754 0.393189 2.63374 0.395083 2.80588C0.396976 2.97802 0.465385 3.14275 0.585988 3.2656C0.706591 3.38844 0.870039 3.45987 1.04211 3.46493C1.21419 3.46999 1.38155 3.40829 1.50916 3.29274L2.99983 1.82941L2.99983 15.3334C2.99983 15.5102 3.07007 15.6798 3.19509 15.8048C3.32012 15.9298 3.48969 16.0001 3.6665 16.0001C3.84331 16.0001 4.01288 15.9298 4.1379 15.8048C4.26293 15.6798 4.33316 15.5102 4.33316 15.3334Z" fill="#B8B8B8"/>
                            <path d="M9.66667 0.666667L9.66667 14.17L8.17801 12.7073C8.11651 12.6419 8.04242 12.5895 7.96019 12.5534C7.87795 12.5173 7.78927 12.4982 7.69946 12.4972C7.60965 12.4962 7.52057 12.5134 7.43756 12.5477C7.35455 12.582 7.27933 12.6327 7.21641 12.6968C7.15348 12.7608 7.10416 12.837 7.0714 12.9206C7.03864 13.0042 7.02311 13.0936 7.02575 13.1834C7.02839 13.2732 7.04914 13.3615 7.08676 13.4431C7.12438 13.5246 7.17809 13.5977 7.24467 13.658L8.76401 15.1507C8.87267 15.2593 9.03934 15.4113 9.21401 15.5667C9.52942 15.8456 9.93594 15.9996 10.357 15.9996C10.7781 15.9996 11.1846 15.8456 11.5 15.5667C11.6753 15.4113 11.842 15.2593 11.9467 15.1547L13.4667 13.658C13.5845 13.5325 13.6493 13.3663 13.6474 13.1942C13.6455 13.0221 13.5771 12.8573 13.4565 12.7345C13.3359 12.6116 13.1725 12.5402 13.0004 12.5352C12.8283 12.5301 12.661 12.5918 12.5333 12.7073L11.0067 14.208L11 14.2133L11 0.666667C11 0.489856 10.9298 0.320286 10.8047 0.195262C10.6797 0.0702378 10.5102 -1.37136e-07 10.3333 -1.44865e-07C10.1565 -1.52593e-07 9.98696 0.0702378 9.86194 0.195262C9.73691 0.320286 9.66667 0.489856 9.66667 0.666667Z" fill="#B8B8B8"/>
                            </svg>}
                        />
                        <TableTHHeader
                            text={""}
                            iconc={null}
                        />
                    </tr>
                </thead>
                <tbody>
                {
                    mylessons?.length === 0 ?
                        <tr>
                            <th colSpan={7} align='center'>Ma’lumot yo’q</th>
                        </tr> :
                        mylessons.map((elem, index) => {
                            return (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <th>{elem.name}</th>
                                    <th>{elem.students}</th>
                                    <th>
                                    <Link to="vedomost" state={{data : elem.id}}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            borderRadius: "10px",
                                            textTransform: "capitalize",
                                            boxShadow: "none",
                                            padding: "12px 12px",

                                        }}
                                        >
                                        Joriy baho
                                    </Button>
                                    </Link>
                                </th>
                                </tr>
                            )
                        })
                }
                </tbody>
            </table>
        </ClassScheduleTableWrapper>
        </BoxBody>
        <BoxFooter>
            <BoxFooterText>{`Jami ${allCount} ta, ${pageSize * (page - 1) + 1} dan ${pageSize * (page - 1) + mylessons.length} gachasi ko'rsatilmoqda`}</BoxFooterText>
            <Pagination count={pageCount} shape="rounded" color="primary" onChange={(_, value) => { setPage(value) }} />
        </BoxFooter>
    </Paper>
    </>
  )
}
