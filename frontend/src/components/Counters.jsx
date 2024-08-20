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
    <div ref={ref} className="flex items-center space-x-4">
      <Icon className="text-primary text-4xl" />
      <div className="text-left">
        <h3 className="text-4xl font-bold text-primary">{count}+</h3>
        <p className="text-gray-700">{label}</p>
      </div>
    </div>
  );
};

const Counters = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
