import { sayHello, showCanvas } from './s1'
import './style.css'

import  { createCanvas } from 'canvas'
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')


showCanvas(ctx,canvas)

sayHello()