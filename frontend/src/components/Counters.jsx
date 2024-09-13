import React, { useEffect, useState, useRef } from 'react';
import { FaRegBuilding, FaUsers, FaCogs, FaHandshake } from 'react-icons/fa';

const Counter = ({ end, duration, label, Icon }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const incrementTime = (duration / end) * 1000;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration, hasStarted]);

  return (
    <div ref={ref} className="flex items-center space-x-4 text-center md:text-left">
      <Icon className="text-blue-800 text-3xl md:text-4xl" />
      <div className="text-left">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800">{count}+</h3>
        <p className="text-sm md:text-base text-blue-800">{label}</p>
      </div>
    </div>
  );
};

const Counters = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          <Counter end={30} duration={3} label="Years Established" Icon={FaRegBuilding} />
          <Counter end={200} duration={2} label="Employees" Icon={FaUsers} />
          <Counter end={500} duration={2} label="Products" Icon={FaCogs} />
          <Counter end={500} duration={2} label="Clients Served" Icon={FaHandshake} />
        </div>
      </div>
    </section>
  );
};

export default Counters;
