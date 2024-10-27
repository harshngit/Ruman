"use client"

import React from "react"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import styled from "styled-components";

interface Props {
    bgImg: string
    classname: string
}

const FormRequestTwo: React.FC<Props> = ({ bgImg, classname }) => {
    return (
        <div
            className={`form-request-block ${classname} relative`}
            style={bgImg ? { backgroundImage: `url('${bgImg}')` } : { backgroundColor: `var(--surface)` }}
        >
            <div className="container h-full py-[60px]">
                <div className="flex max-lg:flex-col lg:items-center justify-between gap-8 h-full">
                    <div className="lg:w-1/2">
                        <div className="heading2 text-white">Trusted Accounting Experts</div>
                        <div className="caption1 text-surface mt-4">Dedicated to Your Financial Growth <br className="max-sm:hidden" /> and Stability</div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="grid lg:grid-cols-2 grid-cols-1">
                            <StyledWrapper>
                                <div className="card">
                                    <p className="card-title">Reliable Accounting, Tax, and Advisory Services</p>
                                    <p className="small-desc">
                                        India&apos;s dynamic market is ideal for diverse businesses and trade, offering growth and technological advantages for international brands and large MNCs. By outsourcing internal processes, like accounting and taxation, to experts.
                                    </p>
                                    <div className="go-corner">
                                        <div className="go-arrow">→</div>
                                    </div>
                                </div>
                            </StyledWrapper>
                            <StyledWrapper>
                                <div className="card">
                                    <p className="card-title">The Company Advantage</p>
                                    <p className="small-desc">
                                        As an authorized accounting and tax consultancy, we offer a wide range of online and onsite services, including accounting, advisory, bookkeeping, budgeting, forecasting, tax services, MIS, data management, and employee training, all within a friendly budget.
                                    </p>
                                    <div className="go-corner">
                                        <div className="go-arrow">→</div>
                                    </div>
                                </div>
                            </StyledWrapper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const StyledWrapper = styled.div`
  .card-title {
    color: #262626;
    font-size: 1.2em;
    line-height: normal;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  .small-desc {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5em;
    color: #452c2c;
  }

  .small-desc {
    font-size: 1em;
  }

  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 2em;
    height: 2em;
    overflow: hidden;
    top: 0;
    right: 0;
    background: linear-gradient(135deg, #6293c8, #384c6c);
    border-radius: 0 4px 0 32px;
  }

  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }

  .card {
    display: block;
    position: relative;
    max-width: 300px;
    max-height: 360px;
    background-color: #f2f8f9;
    border-radius: 10px;
    padding: 2em 1.2em;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(to bottom, #c3e6ec, #a7d1d9);
    font-family: Arial, Helvetica, sans-serif;
  }

  .card:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #364a60, #384c6c);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }

  .card:hover:before {
    transform: scale(28);
  }

  .card:hover .small-desc {
    transition: all 0.5s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }

  .card:hover .card-title {
    transition: all 0.5s ease-out;
    color: #ffffff;
  }`;
export default FormRequestTwo