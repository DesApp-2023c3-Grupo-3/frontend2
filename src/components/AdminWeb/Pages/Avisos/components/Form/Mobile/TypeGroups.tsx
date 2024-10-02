import * as React from 'react';
import { RadioGroup } from '@headlessui/react';

const types = [
  {
    id: 1,
    name: 'Imagen',
  },
  {
    id: 2,
    name: 'Video',
  },
  {
    id: 3,
    name: 'Texto',
  },
];

interface TypeGroupProp {
  type: number;
  setType: (a: any) => void;
}

export function TypeGroup({ type, setType }: TypeGroupProp) {
  return (
    <div>
      <div className="w-full px-4 pt-16">
        <div className="mb-3">
          <span className="text-[#484848] dark:text-white text-[14px] font-[700]">
            Selecciona el tipo de aviso
          </span>
        </div>
        <div className="mx-auto w-full max-w-md">
          <RadioGroup
            value={types.find((plan) => plan.id === type)}
            onChange={(e) => setType(e.id)}
          >
            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
            <div className="space-y-2">
              {types.map((plan) => (
                <RadioGroup.Option
                  key={plan.id}
                  value={plan}
                  className={({ active, checked }) =>
                    `h-[70px]
                  ${
                    active
                      ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${
                    checked
                      ? 'bg-[#4DAE30] text-white'
                      : 'bg-white dark:bg-zinc-300'
                  }
                    relative flex cursor-pointer rounded-[20px] px-5 py-4 shadow-md focus:outline-none`
                  }
                >
                  {({ checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                checked ? 'text-white' : 'text-gray-900'
                              }`}
                            >
                              {plan.name}
                            </RadioGroup.Label>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-white">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
