import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function About() {
  const skills = [
    "JavaScript",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Firebase"
  ];

  return (
    <div>
      <SectionTitle title="About" />
      <div className='flex w-full items-center sm:flex-col'>
        <div className='h-[70vh] w-1/2 sm:w-full object-contain'>
          <DotLottieReact 
            src="https://lottie.host/bd84e7ca-a28a-463d-8d95-e80ba41533e3/lGwicpy2av.lottie"
            background='transparent'
            speed="1"
            autoplay
            loop
          />
        </div>
        <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
          <p className='text-white'>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Platea curabitur ridiculus vestibulum; velit in est. Blandit maecenas quis odio lobortis egestas ornare. Lobortis torquent taciti tristique ullamcorper penatibus sapien massa ultricies. Parturient porttitor quam curae; pellentesque eu tempor. Ultricies sagittis dapibus commodo suspendisse tristique maximus. Netus faucibus nostra ad feugiat, hendrerit risus lacinia ullamcorper nisl. Convallis accumsan ultricies faucibus nibh placerat justo vivamus libero.
          </p>
          <p className='text-white'>
            Quam erat posuere dapibus felis nec egestas aenean. Erat eget fringilla pellentesque metus vulputate ullamcorper consectetur et morbi. Venenatis adipiscing quam egestas nibh, magna scelerisque lacus. Habitant netus amet amet augue ridiculus vestibulum. Ad consequat fringilla ornare ex aptent integer velit. Aliquam tempor faucibus facilisi scelerisque, primis sollicitudin. Purus ante conubia venenatis ultrices eget porttitor laoreet.
          </p>
        </div>
        
      </div>
      <div className='py-5'>
        <h1 className='text-tertiary text-xl'>
          Lectus gravida interdum neque neque pharetra porttitor. Fusce imperdiet et inceptos nam ultrices mi sodales. 
        </h1>
        <div className='flex flex-wrap gap-10  mt-5'>
        {skills.map((skill, index) => (
          <div className='border border-tertiary py-3 px-5'>
            <h1 className='text-tertiary'>{skill}</h1>
          </div>
        ))}
        </div>
       </div>
    </div>
  )
}

export default About;