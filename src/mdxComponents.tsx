import type { ComponentProps } from "react";

export const mdxComponents = {
  h2: (props: ComponentProps<"h2">) => <h2 {...props} className="text-2xl font-bold text-gray-800 mb-4" />,
  h3: (props: ComponentProps<"h3">) => <h3 {...props} className="text-xl font-semibold text-blue-700 mt-6" />,
  h4: (props: ComponentProps<"h4">) => <h4 {...props} className="text-lg font-medium text-gray-600 mt-4 mb-2" />,
  p: (props: ComponentProps<"p">) => <p {...props} className="text-gray-700 mb-4 leading-relaxed" />,
};