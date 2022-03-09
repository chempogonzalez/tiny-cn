export interface ClassObjectDictionary {
  [str: string]: any
}
export type Class =
  | string
  | number
  | null
  | boolean
  | undefined
  | ClassObjectDictionary
  | Array<Class>

export declare const cn: (...classes: Array<Class>) => string
