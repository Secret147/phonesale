package phonesale.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import phonesale.entity.billEntity;

public interface billRepository extends JpaRepository<billEntity, Long>{

}
