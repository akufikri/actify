'use client'
import React, { useState } from 'react';

const Task = () => {
      const tasks = ['Task 1', 'Task 2', 'Task 3'];
      const [showModal, setShowModal] = useState(false);
      const [selectedTask, setSelectedTask] = useState('');

      const openModal = (task) => {
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

                  {/* Modal */}
                  {showModal && (
                        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
                              <div className="modal-box">
                                    <form method="dialog">
                                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                                          </button>
                                    </form>
                                    <div></div>
                                    <h3 className="font-bold text-lg">Create Activity</h3>
                                    <div className="py-4">
                                          <textarea className="textarea textarea-secondary w-full" placeholder="Bio"></textarea>
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
