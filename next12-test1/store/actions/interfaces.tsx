import {
  FETCH_NAVBAR,
  FETCH_NAVBAR_SUCCESS,
  FETCH_NAVBAR_FAILURE,
  FETCH_FOOTER,
  FETCH_FOOTER_SUCCESS,
  FETCH_FOOTER_FAILURE,
} from "../constants/constants";
import { NavbarApiResponse, FooterData } from "../interfaces";

export interface FetchNavbarAction {
  type: typeof FETCH_NAVBAR;
}

export interface FetchNavbarSuccessAction {
  type: typeof FETCH_NAVBAR_SUCCESS;
  payload: NavbarApiResponse;
}

export interface FetchNavbarFailureAction {
  type: typeof FETCH_NAVBAR_FAILURE;
  payload: string;
}

export type NavbarAction =
  | FetchNavbarSuccessAction
  | FetchNavbarFailureAction
  | FetchNavbarAction;

export interface FetchFooterAction {
  type: typeof FETCH_FOOTER;
}

export interface FetchFooterSuccessAction {
  type: typeof FETCH_FOOTER_SUCCESS;
  payload: FooterData | null;
}

export interface FetchFooterFailureAction {
  type: typeof FETCH_FOOTER_FAILURE;
  payload: string;
}

export type FooterAction =
  | FetchFooterFailureAction
  | FetchFooterSuccessAction
  | FetchFooterAction;

export type AllActions = NavbarAction | FooterAction;
