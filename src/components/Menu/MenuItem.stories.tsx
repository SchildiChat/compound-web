/*
Copyright 2023 New Vector Ltd

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

import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ExtensionsIcon from "@vector-im/compound-design-tokens/icons/extensions.svg";
import ChatIcon from "@vector-im/compound-design-tokens/icons/chat.svg";
import SettingsLabel from "@vector-im/compound-design-tokens/icons/settings.svg";

import { MenuItem as MenuItemComponent } from "./MenuItem";
import { Text } from "../Typography/Text";

export default {
  title: "Menu/MenuItem",
  component: MenuItemComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} as Meta<typeof MenuItemComponent>;

const Template: StoryFn<typeof MenuItemComponent> = (args) => (
  <div style={{ width: 300 }}>
    <MenuItemComponent {...args} Icon={ChatIcon} label="First item">
      <Text as="span" size="sm">
        99
      </Text>
    </MenuItemComponent>
    <MenuItemComponent
      {...args}
      Icon={ExtensionsIcon}
      label="Second item with a name that's quite long"
    />
    <MenuItemComponent {...args} Icon={SettingsLabel} label={null}>
      <Text as="span" size="sm">
        Third item without a label
      </Text>
    </MenuItemComponent>
  </div>
);

export const Primary = Template.bind({});
Primary.args = { kind: "primary" };

export const Critical = Template.bind({});
Critical.args = { kind: "critical" };
