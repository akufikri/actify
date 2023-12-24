'use client'
import React, { useState } from 'react';

const Task = () => {
      const tasks = ['Task 1', 'Task 2', 'Task 3'];
      const [showModal, setShowModal] = useState(false);
      const [selectedTask, setSelectedTask] = useState('');

      const openModal = (task: string) => {
            setSelectedTask(task);
            setShowModal(true);
      };


      const closeModal = () => {
            setShowModal(false);
      };

      return (
            <>
                  <div className="mt-20">
                        <div className="flex justify-center gap-5">
                              <div>
                                    <button className="btn btn-circle" onClick={() => openModal(tasks[0])}>
                                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                          </svg>
                                    </button>
                              </div>
                              {/* Other content or buttons can be added here */}
                        </div>
                        <div className="mt-10">
                              <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-2 gap-4">
                                    {tasks.map((task, index) => (
                                          <div key={index} className="row-span-2 border-2 p-3 h-36 rounded-md">
                                                {task}
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
                  {showModal && (
                        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
                              <div className="modal-box">
                                    <form method="dialog">
                                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
                                                ✕
                                          </button>
                                    </form>
                                    <h3 className="font-bold text-lg">Create Activify</h3>
                                    <div className="py-4">
                                          <textarea className="textarea textarea-secondary w-full" placeholder="[🍎]Fixing bug and errors...."></textarea>
                                    </div>
                                    <div className="flex gap-3">
                                          <button className='btn btn-primary'>create</button>
                                          <button className='btn btn-error'>cancle</button>
                                    </div>
                              </div>
                        </div>
                  )}
            </>
      );
};

export default Task;
