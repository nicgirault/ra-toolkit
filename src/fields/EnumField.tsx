import HelpIcon from "@mui/icons-material/HelpOutline"
import { Chip, Color, SxProps, Tooltip } from "@mui/material"
import { grey } from "@mui/material/colors"

import { get } from "lodash"
import { useRecordContext } from "react-admin"

export interface EnumFieldProps {
  label?: string
  source: string
  sx?: SxProps
  options?: {
    [value: string]: {
      color?: Color | string
      label?: string
      description?: string
    }
  }
}

export const EnumField: React.FC<EnumFieldProps> = ({ source, options, sx }) => {
  const record = useRecordContext()

  if (!record) {
    return null
  }

  const value = get(record, source)
  const option = options && options[value]

  const  propsColor = option?.color ?? grey
  const color = typeof propsColor === 'string' ? propsColor : propsColor['800']
  const backgroundColor = typeof propsColor === 'string' ? propsColor + '52' : propsColor['100']

  return (
    <Chip
      label={option?.label ?? value}
      sx={{
        backgroundColor,
        color,
        borderRadius: 1,
        m: 0.5,
        height: 22,
        "& .MuiChip-deleteIcon": {
          color,
          fontSize: 16,
        },
        ...sx
      }}
      onDelete={option?.description ? () => {} : undefined}
      deleteIcon={
        option?.description ? <Tooltip title={option?.description} followCursor>
          <HelpIcon />
        </Tooltip> : undefined
      }
    />
  )
}
