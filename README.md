# Jes-Product

Este es un paquete de prueba en npm 

### Jesus Ramirez

## Ejemplo

```
import { ProductCard, ProducTitle, ProductImage, ProductButtons } from 'jes-product'
```

```
<ProductCard
        product={ product }
        initialValues={{
            count: 4,
            maxCount: 10
        }}
    >
        {
            ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </>
            )
        }
</ProductCard>
```