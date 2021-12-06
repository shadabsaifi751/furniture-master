import React, { useState } from 'react';
import {Card,Col} from "reactstrap";
import myImage from '../images/banner.jpg';
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'

import api from './api';

export default function Animations() {
  const [open, set] = useState(false)

  const springApi = useSpringRef()
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', background: 'hotpink'},
    to: {
      size: open ? '100%' : '30%',
      background: open ? 'green' : 'hotpink',
    },
  })

  const transApi = useSpringRef()
  const transition = useTransition(open ? api : [], {
    ref: transApi,
    trail: 400 / api.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ])

  return (
    <div className="wrapper">
      <animated.div
        style={{ ...rest, width: size, height: size }}
        // className={styles.cstm}
        className="cstm"
        onClick={() => set(open => !open)}>  
      <Card className="">
        <div className="card-body">
        <h5 className="card-title fs-4">Mohd shadab saifi</h5>
        <span>Age: 21</span>
        <p className="card-text">hey </p>
        <a href="#" className="btn btn-warning text-white rounded-pill py-2 fs-6">Go somewhere</a>
        </div>
    </Card>  
        {transition((style, item) => (
          <animated.div
            className="item"
            style={{ ...style, background: item.css}}
          />
        ))}
        <Card className="">
                            <div className="card-body">
                            <h5 className="card-title fs-4">Mohd shadab saifi</h5>
                            <span>Age: 21</span>
                            <p className="card-text">hey </p>
                            <a href="#" className="btn btn-warning text-white rounded-pill py-2 fs-6">Go somewhere</a>
                            </div>
                        </Card>  
        
                    
      </animated.div>
              <Col xs={12} lg={4} className="">
                        <Card className="">
                            <div className="card-body">
                            <h5 className="card-title fs-4">Mohd shadab saifi</h5>
                            <span>Age: 21</span>
                            <p className="card-text">hey </p>
                            <a href="#" className="btn btn-warning text-white rounded-pill py-2 fs-6">Go somewhere</a>
                            </div>
                        </Card>    
                </Col>
    </div>
  )
}

// export default Animations;



