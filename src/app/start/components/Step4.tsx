'use client'

import useUserInfo from '@/hooks/store/useUserInfo'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const boxes = [
  {
    id: 1,
    text: '문화 <br/>예술',
    width: '100px',
    fontSize: '18px',
    startX: '5%',
    startY: '-100px',
    endX: '100px',
    endY: '400px',
  },
  {
    id: 2,
    text: '자기 <br />개발',
    width: '70px',
    fontSize: '16px',
    startX: '30px',
    startY: '-100px',
    endX: '50px',
    endY: '250px',
  },
  {
    id: 3,
    text: '자연',
    width: '80px',
    fontSize: '16px',
    startX: '150px',
    startY: '-100px',
    endX: '150px',
    endY: '300px',
  },
  {
    id: 4,
    text: '휴식',
    width: '100px',
    fontSize: '18px',
    startX: '300px',
    startY: '-100px',
    endX: '250px',
    endY: '350px',
  },
  {
    id: 5,
    text: '소셜',
    width: '66px',
    fontSize: '14px',
    startX: '200px',
    startY: '-100px',
    endX: '170px',
    endY: '180px',
  },
  {
    id: 6,
    text: '건강',
    width: '52px',
    fontSize: '12px',
    startX: '300px',
    startY: '-100px',
    endX: '300px',
    endY: '120px',
  },
  {
    id: 7,
    text: '엔터테인먼트',
    width: '57px',
    fontSize: '10px',
    startX: '20px',
    startY: '-100px',
    endX: '20px',
    endY: '150px',
  },
]

const backgroundShapes = [
  {
    id: 1,
    width: '20px',
    startX: '350px',
    startY: '50px',
    endX: '80px',
    endY: '350px',
  },
  {
    id: 2,
    width: '15px',
    startX: '20px',
    startY: '30px',
    endX: '20px',
    endY: '250px',
  },
  {
    id: 3,
    width: '10px',
    startX: '300px',
    startY: '100px',
    endX: '300px',
    endY: '250px',
  },
  {
    id: 4,
    width: '25px',
    startX: '400px',
    startY: '0px',
    endX: '100px',
    endY: '400px',
  },
  {
    id: 5,
    width: '30px',
    startX: '200px',
    startY: '60px',
    endX: '200px',
    endY: '300px',
  },
  {
    id: 6,
    width: '12px',
    startX: '350px',
    startY: '10px',
    endX: '350px',
    endY: '200px',
  },
  {
    id: 7,
    width: '30px',
    startX: '350px',
    startY: '10px',
    endX: '350px',
    endY: '70px',
  },
]

export default function Step4() {
  const { userInfo } = useUserInfo()
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(true)
    }, 200)
  }, [])

  return (
    <div className="w-screen h-screen absolute top-50 bg-gradient-to-b from-white via-[#fffbfb] to-[#ffa89c]">
      <div className="flex flex-col items-center mt-44">
        <h2 className="text-primary_foundation_60">
          환영해요, {userInfo.name}님!
        </h2>
        <h1 className="title !mt-0">
          조각조각이 고망님의 흩어진 <br />
          <span className="text-accent_100">시간 조각</span>들을 찾아줄게요.
        </h1>

        <div className="relative w-full h-full -mt-20">
          {backgroundShapes.map((shape, index) => (
            <motion.div
              key={shape.id}
              className="absolute bg-accent_100 rounded"
              initial={{ x: shape.startX, y: shape.startY, opacity: 0 }}
              animate={
                isAnimating && { x: shape.endX, y: shape.endY, opacity: 0.3 }
              }
              transition={{
                duration: 2.5,
                delay: index * 0.3,
              }}
              style={{
                width: shape.width,
                height: shape.width,
              }}
            />
          ))}

          {boxes.map((box, index) => (
            <motion.div
              key={box.id}
              className="absolute text-center text-white font-semibold bg-accent_100 rounded"
              initial={{ x: box.startX, y: box.startY, opacity: 0 }}
              animate={isAnimating && { x: box.endX, y: box.endY, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: index * 0.2,
              }}
              style={{
                width: box.width,
                height: box.width,
                fontSize: box.fontSize,
                lineHeight: '140%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: box.text }} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
