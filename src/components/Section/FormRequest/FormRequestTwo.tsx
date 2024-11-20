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
            <div className="heading2 text-white lg:text-left text-center">Trusted Accounting Experts</div>
            <div className="caption1 text-surface  lg:text-left text-center mt-4">Dedicated to Your Financial Growth <br className="max-sm:hidden" /> and Stability</div>
          </div>
          <div className="lg:w-1/2">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:items-start items-center ">
              <StyledWrapper>
                <div className="card">
                  <p className="card-title">Reliable Accounting, Tax, and Advisory Services</p>
                  <p className="small-desc">
                    India is a perfect place for varied type of businesses and trade and having presence for many International Brands and Large size MNCs. India is the perfect example of growth and access to more technological advantages. However, reaping the highest demography benefits depends on how effectively you use the course of events in the market and your business.
                  </p>
                  <p className="small-desc">
                    Making your business sustainable not only relies on market research and operational improvement but saving your time and cost by outsourcing some of the internal processes puts the quality of the outcome at its best. Company offers the best-outsourced Accounting, Taxation, and Advisory services for the businesses need expert governance in their financial operations.
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
                  <p className="small-desc">
                    Our company as your accounting and advisory partner, you can identify your financial position with precise and flawless reports, improve the productivity of your employees by adopting the industry&apos;s advanced solutions, and set elevated financial and business goals with confidence.
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
    font-size: 0.7em;
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