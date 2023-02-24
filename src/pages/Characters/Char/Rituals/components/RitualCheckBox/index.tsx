import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

import styles from './ritualCheckBox.module.css'

export interface RitualCheckBoxProps extends CheckboxPrimitive.CheckboxProps {} 

export function RitualCheckBox(props: RitualCheckBoxProps) {
    return(
        <CheckboxPrimitive.Root className={styles.checkBox} {...props}>
            <CheckboxPrimitive.Indicator>
                <Check weight='bold' size={16}/>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}