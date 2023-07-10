package phonesale.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import phonesale.entity.productEntity;

public interface productRepository extends JpaRepository<productEntity, Long>{

}
