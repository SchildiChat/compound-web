/*
Copyright 2024 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { Meta } from "@storybook/react";

import { Toast as ToastComponent } from "./Toast";

export default {
  title: "Toast",
  component: ToastComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Would you like some toast?",
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=3627-42633&t=m0RMwUTXkukgU29g-0",
  },
} as Meta<typeof ToastComponent>;

export const Default = {
  args: {},
  parameters: {},
};
