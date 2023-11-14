import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // The parent div has the class "flex", which makes it a flex container, and "h-screen", which sets its height to the full height of the screen.
    // The class "flex-col" sets the flex direction to column for small screens, and "md:flex-row" sets it to row for medium and larger screens.
    // The class "md:overflow-hidden" hides any overflow content on medium and larger screens.
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* The first child div has the class "w-full", which sets its width to */}
      {/* 100% of the parent container.  */}
      {/* The class "flex-none" prevents it from growing or shrinking when the parent container is resized.  */}
      {/* The class "md:w-64" sets its width to 64 pixels for medium and larger screens. */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      {/* The second child div has the class "flex-grow", which makes it grow and */}
      {/* fill the remaining space in the parent container.  */}
      {/* The class "p-6" adds padding of 1.5rem (6px) to all sides of the div.  */}
      {/* The class "md:overflow-y-auto" adds vertical scrollbars when the content overflows */}
      {/* on medium and larger screens.  */}
      {/* The class "md:p-12" adds padding of 3rem */}
      {/* (12px) to all sides of the div for medium and larger screens. */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
