import type { Runtime, Tabs } from 'webextension-polyfill';
import { runtime, tabs } from 'webextension-polyfill';

/**
 * Send Message to Background Script
 *
 * @param msg
 * @returns
 */
export const sendMessage = (
  msg: EXTMessage,
  options?: Runtime.SendMessageOptionsType,
): Promise<EXTResponse> => {
  return runtime.sendMessage(msg, options);
};

/**
 * Send Message to Content Script
 */
export const sendMessageToTab = <T = any>(
  tab: Tabs.Tab,
  msg: EXTMessage<T>,
  options?: Tabs.SendMessageOptionsType,
): Promise<Response> => {
  return tabs.sendMessage(tab.id as number, msg, options);
};

/**
 * Send Message to Content Script
 */
export const sendMessageToActiveTab = async <T = any>(
  msg: EXTMessage<T>,
  options?: Tabs.SendMessageOptionsType,
): Promise<Response> => {
  let activeTab: Tabs.Tab;
  try {
    [activeTab] = await tabs.query({ active: true, currentWindow: true });
  } catch (error) {
    console.warn('[===== Error in sendMessageToActiveTab =====]', error);
    throw `Error in sendMessageToActiveTab`;
  }
  return sendMessageToTab(activeTab, msg, options);
};
