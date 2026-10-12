const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const IconClock = (props: { className?: string }) => (
  <svg aria-hidden viewBox="0 0 16 16" className={props.className ?? "size-3.5"} {...p}><circle cx="8" cy="8" r="6.5" /><path d="M8 4.5V8l2.5 1.5" /></svg>
);
export const IconPin = (props: { className?: string }) => (
  <svg aria-hidden viewBox="0 0 16 16" className={props.className ?? "size-3.5"} {...p}><path d="M8 14.5s5-4.3 5-8.2A5 5 0 0 0 3 6.3c0 3.9 5 8.2 5 8.2Z" /><circle cx="8" cy="6.3" r="1.8" /></svg>
);
export const IconUsers = (props: { className?: string }) => (
  <svg aria-hidden viewBox="0 0 16 16" className={props.className ?? "size-3.5"} {...p}><circle cx="6" cy="5.5" r="2.5" /><path d="M1.5 14a4.5 4.5 0 0 1 9 0M11 3.2a2.5 2.5 0 0 1 0 4.6M12.5 9.8a4.5 4.5 0 0 1 2 4.2" /></svg>
);
export const IconCheck = (props: { className?: string }) => (
  <svg aria-hidden viewBox="0 0 16 16" className={props.className ?? "size-3.5"} {...p}><path d="m3 8.5 3.2 3L13 4.5" /></svg>
);
export const IconX = (props: { className?: string }) => (
  <svg aria-hidden viewBox="0 0 16 16" className={props.className ?? "size-3.5"} {...p}><path d="m4 4 8 8M12 4l-8 8" /></svg>
);
export const IconBed = (props: { className?: string }) => (
  <svg aria-hidden viewBox="0 0 16 16" className={props.className ?? "size-3.5"} {...p}><path d="M1.5 12.5v-8M1.5 10h13v2.5M14.5 10V8a2 2 0 0 0-2-2H7v4" /><circle cx="4.2" cy="7.6" r="1.3" /></svg>
);
export const IconMountain = (props: { className?: string }) => (
  <svg aria-hidden viewBox="0 0 16 16" className={props.className ?? "size-3.5"} {...p}><path d="M1 13.5 6 4l3 5.5 1.5-2.5 4.5 6.5Z" /></svg>
);
export const IconStar = (props: { className?: string }) => (
  <svg aria-hidden viewBox="0 0 16 16" className={props.className ?? "size-3.5"} fill="currentColor"><path d="m8 1.5 1.9 4.1 4.5.5-3.3 3.1.9 4.4L8 11.4l-4 2.2.9-4.4L1.6 6.1l4.5-.5Z" /></svg>
);
