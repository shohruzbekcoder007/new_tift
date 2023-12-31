import React from 'react'
import { BoxBody, BoxFooter, BoxFooterText, BoxHeader, ClassScheduleTableWrapper } from '../../../global_styles/styles'
import { Pagination, Paper, Typography } from '@mui/material'
import { TableTHHeader } from '../../DiplomaTable'
import { CalendarBox } from './styles'
export default function CalendarPlans() {
  return (
    <>
      <Typography
        variant="h6"
        component="h4"
        sx={{
          fontSize: "24px",
          fontWeight: 600,
          color: "#151515",
          fontStyle: "normal",
          lineHeight: "normal"
        }}
      >
        NB, taqvim reja, qarzdorlar, baholar
      </Typography>
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <BoxBody>
          <ClassScheduleTableWrapper>
            <table>
              <thead>
                <tr>
                  <TableTHHeader
                    text="Семестер"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="Экспорт"
                    iconc={null}
                  />
                </tr>
              </thead>
              <tbody>
                {
                  [1, 2, 1, 1].map((elem, index) => {
                    return (
                      <tr key={index}>
                        <th>2022-2023 Ikkinchi semestr uchun qayta o`qish</th>
                        <th>
                          <CalendarBox>
                            <button>
                              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_78_30284)">
                                  <path d="M13.798 3.69068L11.4754 1.36668C11.0429 0.932107 10.5286 0.587569 9.96218 0.352988C9.39575 0.118407 8.78844 -0.00156258 8.17536 1.53658e-05H5.16536C4.28163 0.00107394 3.4344 0.352603 2.80951 0.977495C2.18462 1.60239 1.83309 2.44962 1.83203 3.33335V12.6667C1.83309 13.5504 2.18462 14.3976 2.80951 15.0225C3.4344 15.6474 4.28163 15.999 5.16536 16H11.832C12.7158 15.999 13.563 15.6474 14.1879 15.0225C14.8128 14.3976 15.1643 13.5504 15.1654 12.6667V6.99002C15.167 6.37696 15.047 5.76968 14.8123 5.20333C14.5776 4.63699 14.2329 4.12284 13.798 3.69068ZM12.8554 4.63335C13.0589 4.84278 13.234 5.07814 13.376 5.33335H10.4987C10.3219 5.33335 10.1523 5.26311 10.0273 5.13809C9.90227 5.01306 9.83203 4.84349 9.83203 4.66668V1.78935C10.0873 1.9313 10.3229 2.10612 10.5327 2.30935L12.8554 4.63335ZM13.832 12.6667C13.832 13.1971 13.6213 13.7058 13.2462 14.0809C12.8712 14.456 12.3625 14.6667 11.832 14.6667H5.16536C4.63493 14.6667 4.12622 14.456 3.75115 14.0809C3.37608 13.7058 3.16536 13.1971 3.16536 12.6667V3.33335C3.16536 2.80292 3.37608 2.29421 3.75115 1.91914C4.12622 1.54406 4.63493 1.33335 5.16536 1.33335H8.17536C8.2847 1.33335 8.3907 1.35468 8.4987 1.36468V4.66668C8.4987 5.19711 8.70941 5.70582 9.08448 6.0809C9.45956 6.45597 9.96827 6.66668 10.4987 6.66668H13.8007C13.8107 6.77468 13.832 6.88002 13.832 6.99002V12.6667Z" fill="black" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_78_30284">
                                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                  </clipPath>
                                </defs>
                              </svg>
                              NB va taqvim reja
                            </button>
                            <button>
                              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_78_30284)">
                                  <path d="M13.798 3.69068L11.4754 1.36668C11.0429 0.932107 10.5286 0.587569 9.96218 0.352988C9.39575 0.118407 8.78844 -0.00156258 8.17536 1.53658e-05H5.16536C4.28163 0.00107394 3.4344 0.352603 2.80951 0.977495C2.18462 1.60239 1.83309 2.44962 1.83203 3.33335V12.6667C1.83309 13.5504 2.18462 14.3976 2.80951 15.0225C3.4344 15.6474 4.28163 15.999 5.16536 16H11.832C12.7158 15.999 13.563 15.6474 14.1879 15.0225C14.8128 14.3976 15.1643 13.5504 15.1654 12.6667V6.99002C15.167 6.37696 15.047 5.76968 14.8123 5.20333C14.5776 4.63699 14.2329 4.12284 13.798 3.69068ZM12.8554 4.63335C13.0589 4.84278 13.234 5.07814 13.376 5.33335H10.4987C10.3219 5.33335 10.1523 5.26311 10.0273 5.13809C9.90227 5.01306 9.83203 4.84349 9.83203 4.66668V1.78935C10.0873 1.9313 10.3229 2.10612 10.5327 2.30935L12.8554 4.63335ZM13.832 12.6667C13.832 13.1971 13.6213 13.7058 13.2462 14.0809C12.8712 14.456 12.3625 14.6667 11.832 14.6667H5.16536C4.63493 14.6667 4.12622 14.456 3.75115 14.0809C3.37608 13.7058 3.16536 13.1971 3.16536 12.6667V3.33335C3.16536 2.80292 3.37608 2.29421 3.75115 1.91914C4.12622 1.54406 4.63493 1.33335 5.16536 1.33335H8.17536C8.2847 1.33335 8.3907 1.35468 8.4987 1.36468V4.66668C8.4987 5.19711 8.70941 5.70582 9.08448 6.0809C9.45956 6.45597 9.96827 6.66668 10.4987 6.66668H13.8007C13.8107 6.77468 13.832 6.88002 13.832 6.99002V12.6667Z" fill="black" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_78_30284">
                                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                  </clipPath>
                                </defs>
                              </svg>
                              Stik potoklar
                            </button>
                            <button>
                              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_78_30284)">
                                  <path d="M13.798 3.69068L11.4754 1.36668C11.0429 0.932107 10.5286 0.587569 9.96218 0.352988C9.39575 0.118407 8.78844 -0.00156258 8.17536 1.53658e-05H5.16536C4.28163 0.00107394 3.4344 0.352603 2.80951 0.977495C2.18462 1.60239 1.83309 2.44962 1.83203 3.33335V12.6667C1.83309 13.5504 2.18462 14.3976 2.80951 15.0225C3.4344 15.6474 4.28163 15.999 5.16536 16H11.832C12.7158 15.999 13.563 15.6474 14.1879 15.0225C14.8128 14.3976 15.1643 13.5504 15.1654 12.6667V6.99002C15.167 6.37696 15.047 5.76968 14.8123 5.20333C14.5776 4.63699 14.2329 4.12284 13.798 3.69068ZM12.8554 4.63335C13.0589 4.84278 13.234 5.07814 13.376 5.33335H10.4987C10.3219 5.33335 10.1523 5.26311 10.0273 5.13809C9.90227 5.01306 9.83203 4.84349 9.83203 4.66668V1.78935C10.0873 1.9313 10.3229 2.10612 10.5327 2.30935L12.8554 4.63335ZM13.832 12.6667C13.832 13.1971 13.6213 13.7058 13.2462 14.0809C12.8712 14.456 12.3625 14.6667 11.832 14.6667H5.16536C4.63493 14.6667 4.12622 14.456 3.75115 14.0809C3.37608 13.7058 3.16536 13.1971 3.16536 12.6667V3.33335C3.16536 2.80292 3.37608 2.29421 3.75115 1.91914C4.12622 1.54406 4.63493 1.33335 5.16536 1.33335H8.17536C8.2847 1.33335 8.3907 1.35468 8.4987 1.36468V4.66668C8.4987 5.19711 8.70941 5.70582 9.08448 6.0809C9.45956 6.45597 9.96827 6.66668 10.4987 6.66668H13.8007C13.8107 6.77468 13.832 6.88002 13.832 6.99002V12.6667Z" fill="black" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_78_30284">
                                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                  </clipPath>
                                </defs>
                              </svg>
                              Baholar
                            </button>
                            <button>
                              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_78_30284)">
                                  <path d="M13.798 3.69068L11.4754 1.36668C11.0429 0.932107 10.5286 0.587569 9.96218 0.352988C9.39575 0.118407 8.78844 -0.00156258 8.17536 1.53658e-05H5.16536C4.28163 0.00107394 3.4344 0.352603 2.80951 0.977495C2.18462 1.60239 1.83309 2.44962 1.83203 3.33335V12.6667C1.83309 13.5504 2.18462 14.3976 2.80951 15.0225C3.4344 15.6474 4.28163 15.999 5.16536 16H11.832C12.7158 15.999 13.563 15.6474 14.1879 15.0225C14.8128 14.3976 15.1643 13.5504 15.1654 12.6667V6.99002C15.167 6.37696 15.047 5.76968 14.8123 5.20333C14.5776 4.63699 14.2329 4.12284 13.798 3.69068ZM12.8554 4.63335C13.0589 4.84278 13.234 5.07814 13.376 5.33335H10.4987C10.3219 5.33335 10.1523 5.26311 10.0273 5.13809C9.90227 5.01306 9.83203 4.84349 9.83203 4.66668V1.78935C10.0873 1.9313 10.3229 2.10612 10.5327 2.30935L12.8554 4.63335ZM13.832 12.6667C13.832 13.1971 13.6213 13.7058 13.2462 14.0809C12.8712 14.456 12.3625 14.6667 11.832 14.6667H5.16536C4.63493 14.6667 4.12622 14.456 3.75115 14.0809C3.37608 13.7058 3.16536 13.1971 3.16536 12.6667V3.33335C3.16536 2.80292 3.37608 2.29421 3.75115 1.91914C4.12622 1.54406 4.63493 1.33335 5.16536 1.33335H8.17536C8.2847 1.33335 8.3907 1.35468 8.4987 1.36468V4.66668C8.4987 5.19711 8.70941 5.70582 9.08448 6.0809C9.45956 6.45597 9.96827 6.66668 10.4987 6.66668H13.8007C13.8107 6.77468 13.832 6.88002 13.832 6.99002V12.6667Z" fill="black" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_78_30284">
                                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                  </clipPath>
                                </defs>
                              </svg>
                              O’qituvchi yuklamasi
                            </button>
                            <button>
                              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_78_30284)">
                                  <path d="M13.798 3.69068L11.4754 1.36668C11.0429 0.932107 10.5286 0.587569 9.96218 0.352988C9.39575 0.118407 8.78844 -0.00156258 8.17536 1.53658e-05H5.16536C4.28163 0.00107394 3.4344 0.352603 2.80951 0.977495C2.18462 1.60239 1.83309 2.44962 1.83203 3.33335V12.6667C1.83309 13.5504 2.18462 14.3976 2.80951 15.0225C3.4344 15.6474 4.28163 15.999 5.16536 16H11.832C12.7158 15.999 13.563 15.6474 14.1879 15.0225C14.8128 14.3976 15.1643 13.5504 15.1654 12.6667V6.99002C15.167 6.37696 15.047 5.76968 14.8123 5.20333C14.5776 4.63699 14.2329 4.12284 13.798 3.69068ZM12.8554 4.63335C13.0589 4.84278 13.234 5.07814 13.376 5.33335H10.4987C10.3219 5.33335 10.1523 5.26311 10.0273 5.13809C9.90227 5.01306 9.83203 4.84349 9.83203 4.66668V1.78935C10.0873 1.9313 10.3229 2.10612 10.5327 2.30935L12.8554 4.63335ZM13.832 12.6667C13.832 13.1971 13.6213 13.7058 13.2462 14.0809C12.8712 14.456 12.3625 14.6667 11.832 14.6667H5.16536C4.63493 14.6667 4.12622 14.456 3.75115 14.0809C3.37608 13.7058 3.16536 13.1971 3.16536 12.6667V3.33335C3.16536 2.80292 3.37608 2.29421 3.75115 1.91914C4.12622 1.54406 4.63493 1.33335 5.16536 1.33335H8.17536C8.2847 1.33335 8.3907 1.35468 8.4987 1.36468V4.66668C8.4987 5.19711 8.70941 5.70582 9.08448 6.0809C9.45956 6.45597 9.96827 6.66668 10.4987 6.66668H13.8007C13.8107 6.77468 13.832 6.88002 13.832 6.99002V12.6667Z" fill="black" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_78_30284">
                                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                  </clipPath>
                                </defs>
                              </svg>
                              Potoklar (talabalar bilan birga)
                            </button>
                            <button>
                              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_78_30284)">
                                  <path d="M13.798 3.69068L11.4754 1.36668C11.0429 0.932107 10.5286 0.587569 9.96218 0.352988C9.39575 0.118407 8.78844 -0.00156258 8.17536 1.53658e-05H5.16536C4.28163 0.00107394 3.4344 0.352603 2.80951 0.977495C2.18462 1.60239 1.83309 2.44962 1.83203 3.33335V12.6667C1.83309 13.5504 2.18462 14.3976 2.80951 15.0225C3.4344 15.6474 4.28163 15.999 5.16536 16H11.832C12.7158 15.999 13.563 15.6474 14.1879 15.0225C14.8128 14.3976 15.1643 13.5504 15.1654 12.6667V6.99002C15.167 6.37696 15.047 5.76968 14.8123 5.20333C14.5776 4.63699 14.2329 4.12284 13.798 3.69068ZM12.8554 4.63335C13.0589 4.84278 13.234 5.07814 13.376 5.33335H10.4987C10.3219 5.33335 10.1523 5.26311 10.0273 5.13809C9.90227 5.01306 9.83203 4.84349 9.83203 4.66668V1.78935C10.0873 1.9313 10.3229 2.10612 10.5327 2.30935L12.8554 4.63335ZM13.832 12.6667C13.832 13.1971 13.6213 13.7058 13.2462 14.0809C12.8712 14.456 12.3625 14.6667 11.832 14.6667H5.16536C4.63493 14.6667 4.12622 14.456 3.75115 14.0809C3.37608 13.7058 3.16536 13.1971 3.16536 12.6667V3.33335C3.16536 2.80292 3.37608 2.29421 3.75115 1.91914C4.12622 1.54406 4.63493 1.33335 5.16536 1.33335H8.17536C8.2847 1.33335 8.3907 1.35468 8.4987 1.36468V4.66668C8.4987 5.19711 8.70941 5.70582 9.08448 6.0809C9.45956 6.45597 9.96827 6.66668 10.4987 6.66668H13.8007C13.8107 6.77468 13.832 6.88002 13.832 6.99002V12.6667Z" fill="black" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_78_30284">
                                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                  </clipPath>
                                </defs>
                              </svg>
                              Qarzdorlar
                            </button>
                          </CalendarBox>
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
          <BoxFooterText>{`Jami 3 ta, 1 dan 3 gachasi ko'rsatilmoqda`}</BoxFooterText>
          <Pagination count={10} shape="rounded" color="primary" onChange={(_, value) => { console.log(value) }} />
        </BoxFooter>
      </Paper>
    </>
  )
}
